# XX Galgame 群公告板 NG

内容填充中

## 使用方法

部署地址：<https://doc.aoikaze.org>

### 本地测试

按照下面的步骤进行以启动本地预览

- 安装 `Node.js`：官网 https://nodejs.org/en/
- 安装 `pnpm`：官网 https://www.pnpm.cn/
- 在项目根目录下运行 `pnpm install`
- 运行 `pnpm dev` 启动本地预览

不出意外，你就应该可以在 <https://localhost:3000> 看到网站的预览

> **注意**：推荐使用 `pnpm` 作为包管理器

### 贡献方法

所有的文章都是位于 `pages/` 目录下的 `.md` 或者 `.mdx` 文件，采用 Markdown 或者 MDX 语法编写。

 `pages/index.mdx` 对应了首页的内容。

 `pages/` 目录下的每一个子文件夹对应了 Tab 栏上的一个分栏；如果需要增加新的分栏，在建立文件夹之后需要在 `pages/meta.json` 中按照以下的格式进行更新：

```json
"文件夹名称": {
    "title": "分栏名称",
    "type": "nav"
}
```

在每一个分栏的目录下文件/文件夹的树状结构会出现在页面左侧的目录中。每一级目录下都要包含 `meta.json` 来指定该目录下的文件的顺序和文件对应的文章标题；简单地说，如果你要在某个分栏子目录下增加一篇文章，你需要先在这个目录下建立新的 Markdown 文档，然后按照一下的格式更新此目录下的 `meta.json`：

```json
"文件名称（不包含扩展名）": "文章标题"
```

如果你要在某一个分栏下增加子目录，而这个子目录下没有 `index.md` 或 `index.mdx`，你就需要为这个子目录指定一个重定向；你可以在项目根目录的 `next.config.js` 中的 `module.exports` 部分中的 `redirects` 数组中按照如下格式增加重定向：

```js
{
    source: '你的子目录的相对路径',
    destination: '重定向到的页面的相对路径',
    statusCode: 301
}
```

`pages/_app.js` 无需修改。

如果你需要在你的文章中引入图像，那么你需要将你的图片放到 `public/image/` 目录下，**重新命名并分类之后**在你的文章中通过类似 `/image/..` 的地址来引用它。

