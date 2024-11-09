`center` 和 `space-around` 都是 `justify-content` 和 `align-items` 属性的对齐方式，它们用来控制 Flexbox 中子元素在主轴和交叉轴上的对齐方式。它们的主要区别在于子元素的分布方式。

### `center`：
- **`center`** 会把所有子元素集中对齐，使它们在容器的主轴或交叉轴上居中。
- 对于主轴（`justify-content`）来说，所有子元素会集中排列在主轴的中间。
- 对于交叉轴（`align-items`）来说，所有子元素会集中排列在交叉轴的中间。

### `space-around`：
- **`space-around`** 会让子元素沿主轴或交叉轴排列，并且每个子元素之间的间隔相等。
- 在主轴上，`space-around` 会在每个子元素的前后都有相等的空间，因此元素之间的间距大于元素与容器边缘的间距。
- 在交叉轴上，`space-around` 会使得每个元素上下有相等的间距。

### 主要区别：
- **`center`** 会将子元素集中对齐，而 **`space-around`** 会在子元素之间添加均等的间距。
- 使用 `center` 时，子元素之间没有间距，而使用 `space-around` 时，子元素之间会有间隔。

### 下面我会提供一个实例test3.html，来比较这两者在 Flexbox 布局中的效果。

---

### HTML 结构：

```html
<div class="container center">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<div class="container space-around">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### CSS 代码：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center; /* 或者 space-around，根据不同的类名 */
  align-items: center; /* 交叉轴居中 */
  height: 200px; /* 高度设置为200px，便于观察效果 */
  margin-bottom: 20px; /* 给两个容器之间添加一点间距 */
  background-color: lightgray; /* 背景色 */
}

.container.space-around {
  justify-content: space-around; /* 设置为space-around */
}

.item {
  padding: 20px;
  background-color: lightcoral;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
}
```

### 结果说明：

- **第一个容器**：使用了 `justify-content: center`，所有的子元素都会集中对齐在容器的中心，无论是水平方向还是垂直方向。
- **第二个容器**：使用了 `justify-content: space-around`，这意味着子元素会分布在容器中，且它们之间的间隔相等。

### 结果：

1. **第一个容器（`center`）**：三个子元素会聚集在容器的中心，子元素之间没有额外的空间。
2. **第二个容器（`space-around`）**：子元素会在容器内有相等的间隔，而且子元素之间的空间大于容器边缘与第一个/最后一个子元素之间的空间。

---

### 完整效果对比：
#### **1. `justify-content: center`**
- 所有子元素在主轴（水平方向）和交叉轴（垂直方向）上都会居中对齐。
- 子元素间无额外间距，直接居中排列。

#### **2. `justify-content: space-around`**
- 子元素之间会有均等的空间，而每个子元素与容器的边缘也会有相等的空间。
- 在主轴上，子元素之间的间隔大于元素与容器边缘的间隔。

---

### 视觉效果：

- **`center`**：  
  所有项会聚集在中间，且元素之间没有间距。
  
  ```
  |   Item 1   |   Item 2   |   Item 3   |
  ```

- **`space-around`**：  
  元素之间有均等的间隔，且这些间隔大于容器的边缘与元素之间的空间。

  ```
  |   Item 1   |    |   Item 2   |    |   Item 3   |
  ```

