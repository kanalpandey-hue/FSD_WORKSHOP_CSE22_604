import fs from"node:fs/promises";
const filePath = "userdata.txt";
//create (write a new file or overwrite an existing file
async function createFile(content) {
    try {
        await fs.writeFile(filePath, content);
        console.log("File created successfully.");
    } catch (error) {
        console.error("Error creating file:", error);
    }
}
//2.read (fetch content of the file)
async function readFile() {
    try {
        const content = await fs.readFile(filePath, "utf8");
        console.log("File content:\n", content);
    return content;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("File not found. Please create the file first.");
        } else {
            console.error("Error reading file:", error);
        }
    }
}
//execute the functions
async function runDemo() {
    await createFile("Hello, this is a sample content for the file.");
    await readFile();
}
runDemo();
// function update file content
async function updateFile(newContent) {
    try {
        await fs.appendFile(filePath, newContent);
        console.log("File updated successfully.");
    } catch (error) {
        console.error("Error updating file:", error);
    }
}
// function delete file
async function deleteFile() {
    try {
        await fs.unlink(filePath);
        console.log("File deleted successfully.");
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("File not found. Nothing to delete.");
        } else {
            console.error("Error deleting file:", error);
        }
    }
}
createFile("This is the initial content of the file.")
