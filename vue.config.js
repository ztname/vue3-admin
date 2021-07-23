
// 配置完必须重启

module.exports = {
    // 判断资源路径  production 生产环境
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    // 配置打包后的出口文件 run build默认打包生产环境  开发环境需要另外配置环境变量
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // 关闭自带的语法自动检测  （空格之类的报错）
    lintOnSave: false,
    // 配置css
    css: {
      loaderOptions: {
        //   配置引入css全局样式入口，重置浏览器样式，书写全局样式
        scss: {
          prependData: `@import "~@/styles/main.scss";`
        }
      }
    }
  }