const path = require('path');

const filePath =
  'C:UsersVaheDesktopITNode JSDipesh-Malvia-Tutorial\filessample.txt';

const fs = require('fs');
const fsPromise = require('fs').promises;

const fileReading = async () => {
  try {
    const data = await fsPromise.readFile(filePath, { encoding: 'utf-8' });
    console.log('FS PROMISES:', data);
  } catch (error) {
    console.log(error);
  }
};

// fileReading();

// Writing

const txtFile = path.join(__dirname, 'files', 'text.txt');
const content = 'Substitute my previous content with the new one I have made';

// fs.writeFile(txtFile, content, (error) => {
//   if (error) {
//     throw new Error('Something went wrong');
//   }
//   console.log('Operation Completed successfully');
//   fs.readFile(txtFile, 'utf-8', (err, data) => {
//     if (err) throw new Error(err);
//     console.log(data);
//   });
// });

const writingInFile = async () => {
  try {
    await fsPromise.writeFile(
      txtFile,
      '\n We have given new name to the file',
      {
        flag: 'a+',
      }
    );
    // await fsPromise.appendFile(txtFile, '\n this is file appender');

    await fs.promises.rename(
      txtFile,
      path.join(__dirname, 'files', 'newtxt.txt')
    );
    const data = await fsPromise.readFile(
      path.join(__dirname, 'files', 'newtxt.txt')
    );
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
};

writingInFile();
