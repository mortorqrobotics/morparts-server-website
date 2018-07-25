export const getIdentifier = (part) => {
    let identifier = "";
    identifier += "-" + (part.isAssembly ? "A" : "P") + "-";
    identifier += part.assemblyNumber + part.partNumber;
    return identifier;
}

export const statuses = {
    designing: {
        text: "Design in progress",
        color: "#4286f4",
    },
    material: {
        text: "Material needs to be ordered",
        color: "#ff0000",
    },
    ordered: {
        text: "Waiting for materials",
        color: "#ff9900",
    },
    drawing: {
        text: "Needs drawing",
        color: "#9900ff",
    },
    ready: {
        text: "Ready to manufacture",
        color: "#448e7e",
    },
    manufacturing: {
        text: "Manufacturing in progress",
        color: "#ff00cb",
    },
    outsourced: {
        text: "Waiting for outsourced manufacturing",
        color: "#663300",
    },
    assembly: {
        text: "Waiting for assembly",
        color: "#cccc00",
    },
    done: {
        text: "Done",
        color: "#35f700",
    },
}
