`<nav>` 标签是 HTML5 中新增的一个语义化标签，它用于定义文档中的导航区域。简单来说，`<nav>` 用来标识一组与网站导航相关的链接，通常是网站的菜单、链接列表或者其他用于帮助用户在网站中跳转的元素。

### 语法：
```html
<nav>
    <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于我们</a></li>
        <li><a href="#services">服务</a></li>
        <li><a href="#contact">联系</a></li>
    </ul>
</nav>
```

### 功能和作用：
1. **语义化标记**：`<nav>` 标签本身并不添加样式或行为，它的作用是明确告诉浏览器和开发者，这部分内容是页面的导航区域。这对于提高网页的可访问性和搜索引擎优化（SEO）非常有用。

2. **包含导航链接**：`<nav>` 标签通常包含的是指向网站或应用内部不同页面的链接，或者是与用户跳转相关的按钮等。

3. **结构化文档**：使用 `<nav>` 标签有助于明确网页结构，使页面的内容更具可读性，特别是对于辅助技术（如屏幕阅读器）和搜索引擎来说，能够更好地理解页面的布局和结构。

### `<nav>` 标签常见的用法：
- **顶部导航栏**：网站的主菜单，通常包括主页、关于、服务、联系方式等链接。
- **侧边栏导航**：侧边栏中包含的内部链接，帮助用户浏览不同的内容。
- **页脚导航**：通常包含网站的隐私政策、使用条款、联系我们等链接。

### 示例：
```html
<header>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <!-- 其他内容 -->
</main>

<footer>
    <nav>
        <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
    </nav>
</footer>
```

### 使用 `<nav>` 标签的好处：
1. **可访问性**：屏幕阅读器等辅助工具能够识别并提供导航功能，帮助视觉障碍用户快速定位到网站的导航区域。
2. **SEO（搜索引擎优化）**：通过使用 `<nav>` 标签，搜索引擎能够更好地理解页面结构和导航链接，有助于提升页面的搜索排名。
3. **页面结构化**：明确的语义化标记让开发者更容易理解和管理代码。

### 注意事项：
- 虽然 `<nav>` 标签的作用是用于标识导航区域，但它并不是所有链接都必须放在其中。通常来说，`<nav>` 中包含的是网站的主要导航链接，而不是每个页面中的每个链接。如果一个页面有大量的链接，但这些链接并不用于导航（例如版权声明、免责声明等），则这些链接不应放在 `<nav>` 标签中。

### 总结：
`<nav>` 标签是一个语义化的 HTML5 元素，专门用来定义导航区域。它通过明确标识文档中的导航部分，帮助搜索引擎、辅助工具和开发者理解页面的结构，从而提高可访问性和 SEO。

