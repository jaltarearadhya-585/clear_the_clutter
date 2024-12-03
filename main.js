// my.jpg, file.pdf, image.jpg, graphic.zip;
// we have to clear this clutter and organize them into their res directories
import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const current_dir =
  <path_of_the_main_directory>;

const file_list = await fs.readdir(current_dir);

for (const item of file_list) {
  console.log("running for :-", item);
  let ext = item.split(".")[item.split(".").length - 1];
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(current_dir, ext))) {
      fs.rename(
        path.join(current_dir, item),
        path.join(current_dir, ext, item)
      );
    } else {
      fs.mkdir(ext);
      fs.rename(
        path.join(current_dir, item),
        path.join(current_dir, ext, item)
      );
    }
  }
}
