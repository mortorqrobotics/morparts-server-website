"use strict";

let gulp = require("gulp");
let gutil = require("gulp-util");
let source = require("vinyl-source-stream");
let browserify = require("browserify");
let babelify = require("babelify");
let watchify = require("watchify");
let tap = require("gulp-tap");
let eventStream = require("event-stream");
let streamify = require("gulp-streamify");
let uglify = require("gulp-uglify");

let libs = [
    "axios",
    "dompurify",
    "radium",
    "react",
    "react-dom",
    "react-modal",
    "react-redux",
    "redux",
    "redux-thunk",
];

let allPages = [
    "home",
    "inventory",
    "dashboard",
    "project",
];

function stuff(bundler) {
    for (let lib of libs) {
        bundler.external(lib);
    }
    return bundler
        .transform(babelify)
}

function build(pages) {
    return gulp.src(pages.map(page => (
        "./website/src/" + page + "/components/" + capitalize(page) + ".js"
    )), { read: false, })
        .pipe(tap(file => {
            let options = {};
            if (process.env.NODE_ENV !== "production") {
                options.debug = true;
            }
            let bundler = browserify(file.path, options);
            file.contents = stuff(bundler).bundle();
        }))
        .pipe(streamify(uglify()))
        .on("error", function(err) {
            console.log(err.toString());
            console.log(err.codeFrame);
        })
        .pipe(gulp.dest("./website/build/"));
}

gulp.task("build", () => {
    return build(allPages);
});

for (let page of allPages) {
    gulp.task("build-" + page, () => {
        return build([page]);
    });
}

function watchPage(page) {
    let path = "./website/src/" + page + "/components/" + capitalize(page) + ".js";
    let bundler = watchify(browserify({
        entries: [path],
        debug: true,
        cache: [],
        packageCache: [],
    }));
    bundler = stuff(bundler);
    let watcher = () => {
        return bundler.bundle()
            .on("error", function(err) {
                console.log(err.toString());
                console.log(err.codeFrame);
                this.emit("end");
            })
            .pipe(source(capitalize(page) + ".js"))
            .pipe(gulp.dest("./website/build/"));
    }
    bundler.on("update", watcher);
    bundler.on("log", gutil.log);
    return watcher();
}

gulp.task("watch", () => {
    let streams = allPages.map(watchPage);
    return eventStream.merge(streams);
});

for (let page of allPages) {
    gulp.task("watch-" + page, () => {
        return watchPage(page);
    });
}

gulp.task("vendor", function() {
    let bundler = browserify({
        debug: true,
        cache: {},
        packageCache: {},
    });
    for (let lib of libs) {
        bundler.require(lib);
    }
    let thing = bundler
        .bundle()
        .pipe(source("vendor.js"));
    if (process.env.NODE_ENV === "production") {
        thing = thing.pipe(streamify(uglify()));
    }
    return thing.pipe(gulp.dest("./website/build/"));
});

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
};
