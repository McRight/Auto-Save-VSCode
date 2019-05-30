// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Running the extension on start
	vscode.commands.executeCommand('extension.autoSave');

	// If window focus is changes => save
	let listener = (e) =>{
		if(e.focused == false){
			vscode.workspace.saveAll();
		}
	}

	let disposable = vscode.commands.registerCommand('extension.autoSave', () => {
		let change = vscode.window.onDidChangeWindowState(listener);
		return change;
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
