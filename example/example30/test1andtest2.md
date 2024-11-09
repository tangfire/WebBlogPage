以下是一个关于两种 `flex-direction` 的实际案例。

### 案例 1：**主轴为水平（`flex-direction: row`），交叉轴为垂直**

在这个案例中，我们将创建一个容器 `.con`，其子元素 `.item` 会沿着水平方向排列，并且在垂直方向上居中对齐。

#### HTML:

```html
<div class="con">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

#### CSS (主轴为水平，交叉轴为垂直):

```css
.con {
  display: flex;
  flex-direction: row; /* 主轴为水平方向，子元素会沿水平方向排列 */
  justify-content: center; /* 主轴对齐方式：水平方向居中 */
  align-items: center; /* 交叉轴对齐方式：垂直方向居中 */
  height: 200px; /* 给容器设置一个高度 */
  background-color: lightgray; /* 背景色用于观察效果 */
}

.item {
  padding: 20px;
  background-color: lightblue;
  margin: 10px;
  text-align: center;
}
```

#### 解释：
- **`flex-direction: row`**：主轴是水平方向，子元素会沿水平方向从左到右排列。
- **`justify-content: center`**：子元素会在水平方向居中对齐。
- **`align-items: center`**：子元素会在垂直方向居中对齐。
- 由于 `con` 的高度被设置为 `200px`，所以子元素会在该容器的垂直方向上垂直居中，且水平居中。

#### 结果：
- 子元素会在 `.con` 容器内水平居中排列，同时也会垂直居中对齐。

---

### 案例 2：**主轴为垂直（`flex-direction: column`），交叉轴为水平**

在这个案例中，我们将创建一个容器 `.con`，其子元素 `.item` 会沿着垂直方向排列，并且在水平方向上居中对齐。

#### HTML:

```html
<div class="con">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

#### CSS (主轴为垂直，交叉轴为水平):

```css
.con {
  display: flex;
  flex-direction: column; /* 主轴为垂直方向，子元素会沿垂直方向排列 */
  justify-content: center; /* 主轴对齐方式：垂直方向居中 */
  align-items: center; /* 交叉轴对齐方式：水平方向居中 */
  height: 300px; /* 给容器设置一个高度 */
  background-color: lightgray; /* 背景色用于观察效果 */
}

.item {
  padding: 20px;
  background-color: lightgreen;
  margin: 10px;
  text-align: center;
}
```

#### 解释：
- **`flex-direction: column`**：主轴是垂直方向，子元素会沿垂直方向从上到下排列。
- **`justify-content: center`**：子元素会在垂直方向（主轴）居中对齐。
- **`align-items: center`**：子元素会在水平方向（交叉轴）居中对齐。
- 由于 `.con` 容器的高度是 `300px`，所以子元素会在容器的垂直方向上居中排列。

#### 结果：
- 子元素会在 `.con` 容器内垂直居中排列，并且水平居中对齐。

---

### 总结：

1. **主轴为水平（`flex-direction: row`）**：
   - 子元素排列在水平方向，交叉轴是垂直的，子元素会在容器的垂直方向上居中对齐。
   
2. **主轴为垂直（`flex-direction: column`）**：
   - 子元素排列在垂直方向，交叉轴是水平方向，子元素会在容器的水平方向上居中对齐。

### 示例效果对比：

- 在第一个例子中，子元素会水平排列，垂直居中。
- 在第二个例子中，子元素会垂直排列，水平居中。



--------------------


**如果你将主轴方向改成垂直的，交叉轴就会变成水平的**。

在 **Flexbox** 布局中，主轴（main axis）和交叉轴（cross axis）是相对的，主轴的方向由 `flex-direction` 属性决定。具体地：

- **默认设置 (`flex-direction: row`)**：
  - 主轴是 **水平** 的（从左到右），即子元素会沿水平方向排列。
  - 交叉轴是 **垂直** 的（从上到下），即子元素在交叉轴上的对齐会影响它们在垂直方向上的排列。

- **当你修改主轴方向为垂直 (`flex-direction: column`)**：
  - 主轴会变为 **垂直** 的（从上到下），子元素会沿垂直方向排列。
  - 交叉轴就变成了 **水平** 的（从左到右），这意味着子元素在交叉轴上的对齐会影响它们在水平方向上的排列。

### 例子：

#### 1. 主轴为水平，交叉轴为垂直（`flex-direction: row`）

```css
.con {
    display: flex;
    flex-direction: row; /* 主轴为水平方向 */
    justify-content: center; /* 水平居中（主轴对齐） */
    align-items: center; /* 垂直居中（交叉轴对齐） */
}
```

- 主轴方向：水平方向（子元素沿水平方向排列）
- 交叉轴方向：垂直方向（子元素在垂直方向上居中）

#### 2. 主轴为垂直，交叉轴为水平（`flex-direction: column`）

```css
.con {
    display: flex;
    flex-direction: column; /* 主轴为垂直方向 */
    justify-content: center; /* 垂直居中（主轴对齐） */
    align-items: center; /* 水平居中（交叉轴对齐） */
}
```

- 主轴方向：垂直方向（子元素沿垂直方向排列）
- 交叉轴方向：水平方向（子元素在水平方向上居中）

### 总结：

- **主轴方向**由 `flex-direction` 决定。如果 `flex-direction` 是 `row`，主轴是水平的；如果是 `column`，主轴是垂直的。
- **交叉轴方向**则是主轴的垂直方向。换句话说，当主轴是水平时，交叉轴是垂直的；当主轴是垂直时，交叉轴就是水平的。