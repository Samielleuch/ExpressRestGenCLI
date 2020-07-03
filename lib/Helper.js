
const spawn = require("child_process").spawn;

exports.installHelper = (command, onSuccess) => {
    return new Promise((resolve, reject) => {
      let process = spawn(command, { shell: true });
      process.on("exit", () => {
        onSuccess();
        resolve();
      });
    });
  };