在 CSS 中，`position` 属性用于指定元素的定位方式。它控制元素的位置以及如何在页面中定位。`position` 属性有几个不同的值，每个值都有不同的行为和用途。你提到的 `.pri` 类中的 `position: fixed;` 是其中之一。以下是 `position` 属性的常见值及其解释：

### 1. **`static`**（默认值）
- **作用**：这是默认值。当元素的 `position` 被设置为 `static` 时，它会按照文档流排列，意味着它会根据 HTML 中的顺序出现在页面上。
- **特点**：
  - 元素的定位基于普通文档流。
  - 不能使用 `top`, `right`, `bottom`, `left` 来调整其位置。
  - 不会响应 `z-index` 的控制。

```css
.element {
  position: static;
}
```

### 2. **`relative`**
- **作用**：元素的位置相对于它原始的位置进行偏移。它仍然保持在文档流中，只是相对于其原位置偏移。
- **特点**：
  - 可以使用 `top`, `right`, `bottom`, `left` 来移动元素，但元素仍然占据原始空间。
  - 对 `z-index` 有影响，可以控制元素的堆叠顺序。
  
```css
.element {
  position: relative;
  top: 20px;  /* 相对于元素的原始位置向下偏移20px */
  left: 30px; /* 向右偏移30px */
}
```

### 3. **`absolute`**
- **作用**：元素的位置相对于最近的已定位祖先元素（即其父元素中第一个具有 `position: relative`、`position: absolute` 或 `position: fixed` 的元素）。如果没有已定位的祖先元素，则相对于文档的 `<html>` 根元素进行定位。
- **特点**：
  - 元素脱离文档流，不会影响其他元素的布局。
  - 可以使用 `top`, `right`, `bottom`, `left` 来精确定位。
  - 可以使用 `z-index` 来控制堆叠顺序。
  
```css
.element {
  position: absolute;
  top: 50px;  /* 相对于最近的已定位祖先元素向下偏移50px */
  left: 100px; /* 向右偏移100px */
}
```

### 4. **`fixed`**
- **作用**：元素的位置相对于浏览器窗口进行定位。无论页面如何滚动，使用 `position: fixed` 的元素都会保持固定在屏幕的某个位置。
- **特点**：
  - 元素脱离文档流，不会影响其他元素的布局。
  - 使用 `top`, `right`, `bottom`, `left` 来指定元素在浏览器视口中的位置。
  - 适用于做悬浮导航栏、固定侧边栏等效果。
  
```css
.element {
  position: fixed;
  top: 10px;   /* 距离视口顶部10px */
  right: 20px; /* 距离视口右边20px */
}
```

### 5. **`sticky`**
- **作用**：这个值结合了 `relative` 和 `fixed` 的特性。当页面滚动到某个特定位置时，元素会像 `fixed` 一样固定在屏幕上；而在其他地方，它会跟随页面滚动，就像 `relative` 一样。
- **特点**：
  - 只有在元素的 `top`, `bottom`, `left`, `right` 达到指定位置时，元素才会“粘住”。
  - 需要设置 `top`, `left`, `right`, `bottom` 之一，并且元素的父容器必须有足够的高度来使元素在滚动时触发粘性定位。
  
```css
.element {
  position: sticky;
  top: 0;  /* 元素将在滚动到顶部时“粘住” */
}
```

---

### 总结：

`position` 属性的常见值包括：

1. **`static`**（默认值）：按照普通文档流定位，不能偏移。
2. **`relative`**：相对于原位置偏移，仍然在文档流中。
3. **`absolute`**：相对于最近的已定位父元素偏移，脱离文档流。
4. **`fixed`**：相对于浏览器视口定位，脱离文档流，滚动时固定在页面上。
5. **`sticky`**：结合 `relative` 和 `fixed` 的行为，元素会在滚动到一定位置时固定。

