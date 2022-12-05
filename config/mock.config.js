// 文件系统
const fs = require('fs');
//路径模块
const path = require('path');
// 实现response函数
function response (res,content,type='json'){
    res.type(type);
    res.write(content);
    res.end()
}
// mock函数
function mock(res,file){
    fs.readFile(file, 'utf-8', (error, content) => {
        if (error) {
            response(res,error.message,'html')
        } else {
            response(res,content)
        }
        
    }) 
}
// mock中间件config 外层函数  (req,res,next)内存函数
const mockMiddleware = (config) => (req, res, next)=>{
    //projectDir:项目文件目录  mockDir：mock文件目录
    const { projectDir, mockDir } = config;
    // 拼装文件路径 
    // path.resolve([from ...], to)
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
    const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`);
    //文件检查：是否被有效解析
    return fs.stat(filePath, (error) => {
        if (error) {
          next()  
        } else {
           mock(res,filePath) 
        }
    })
}
module.exports = mockMiddleware;