import fs from 'fs';
import path from 'path';

export function writeAdapterJson(adapterPath, adapter, content) {
  // 写入 json 文件
  fs.writeFileSync(
    path.resolve(
      process.cwd(),
      'packages/domain-finance/__mock__',
      adapterPath,
      `./${adapter}.json`
    ),
    JSON.stringify(content, null, 2),
    'utf8'
  );
}
