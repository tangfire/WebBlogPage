`overflow: hidden;` 是 CSS 中的一个属性，它控制元素内容溢出（即超出元素盒子区域）的显示行为。具体来说，`overflow: hidden;` 会隐藏任何超出该元素内容区域的部分。

### 语法：
```css
element {
  overflow: hidden;
}
```

### 解释：
- **`overflow`** 属性用于指定当元素的内容超出它的盒子（即容器）时，如何处理超出部分。
- `hidden` 是 `overflow` 属性的一个值，表示 **隐藏** 超出容器的部分。换句话说，如果元素的内容超过了它的指定尺寸（例如宽度和高度），超出部分会被 **裁切掉**，不会显示出来。

### 示例：

假设有一个固定大小的容器，其中的内容超出了容器的大小：

```html
<div class="container">
  <div class="content">This is some content that is too large for the container.</div>
</div>
```

```css
.container {
  width: 200px;
  height: 50px;
  overflow: hidden;  /* 隐藏超出的内容 */
  border: 1px solid #000;
}

.content {
  width: 300px;  /* 内容的宽度大于容器的宽度 */
  height: 100px;  /* 内容的高度大于容器的高度 */
}
```

### 结果：
- `.container` 容器的尺寸是 `200px x 50px`，而 `.content` 的尺寸是 `300px x 100px`，内容超出了容器的大小。
- `overflow: hidden;` 会隐藏超出容器边界的部分。因此，只有容器内部 `200px x 50px` 的部分会显示出来，剩余部分会被裁切，不会显示。

### 使用场景：
1. **控制溢出内容的显示：**
   - 当你希望容器内的内容不超出其边界时，可以使用 `overflow: hidden;` 来确保任何超出容器的部分都被裁剪掉。
   
2. **实现自定义滚动条：**
   - 通过结合 `overflow: hidden;` 和其他 CSS 属性（例如 `position: relative` 或 `z-index`），可以实现一些不需要显示滚动条的效果（例如固定的布局或遮罩效果）。

3. **布局优化：**
   - 在有些情况下，特别是设计响应式布局时，可能需要隐藏溢出的内容以保持元素的整洁，避免出现滚动条或内容泄露。

### 注意事项：
- 使用 `overflow: hidden;` 会使得超出容器部分的内容不可见且无法滚动。如果需要可以滚动内容，可以使用 `overflow: scroll;` 或 `overflow: auto;`。
- 有时 `overflow: hidden;` 会影响一些布局行为，特别是在涉及到浮动元素、定位元素或动画效果时，需要特别注意它的使用对布局的影响。

### 总结：
`overflow: hidden;` 用于隐藏超出元素尺寸范围的内容，常见于控制布局、清除浮动、以及防止滚动条显示等场景。