export const getIdentifier = (part) => {
    let identifier = "";
    identifier += "-" + (part.isAssembly ? "A" : "P") + "-";
    identifier += part.assemblyNumber + part.partNumber;
    return identifier;
}
