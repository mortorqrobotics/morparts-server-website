export const getIdentifierString = (part) => {
    let str = part.identifier.prefix;
    str += "-" + (part.isAssembly ? "A" : "P") + "-";
    str += part.identifier.assembly + part.identifier.part;
    return str;
}

export const filterPartType = (parts, getAssemblies) => {
    return parts.filter(part => getAssemblies == part.isAssembly);
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
