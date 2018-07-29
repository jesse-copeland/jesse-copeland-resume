import { promises as fsPromises } from 'fs';

export default options => {
  return fsPromises.readFile(options);
}