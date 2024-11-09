我从 **动画属性** 的角度更清楚地解释为何元素在动画结束后回到原始位置。

### 问题分析：

你提供的代码里，`.car` 元素在动画期间会从 `margin-left: 100px` 变到 `margin-left: 500px`，看似动画结束后会停在 `500px` 的位置。但是，你提到动画结束后，元素似乎 **又回到了原位（`100px`）**。

#### 你的代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .car{
            width: 100px;
            height: 100px;
            margin-top: 100px;
            margin-left: 100px;
            background: red;
            animation: run 3s linear;
        }

        @keyframes run{
            50%{
                margin-left: 200px;
            }

            100%{
                margin-left: 500px;
            }
        }
    </style>
</head>
<body>
    <div class="car"></div>
</body>
</html>
```

### 为什么会回到原位？

问题的关键在于 CSS 动画的工作原理。

1. **CSS 动画的初始值和结束值**：动画在执行时会根据定义的 `keyframes` 来逐步变化。元素的样式（如 `margin-left`）会按比例从起始值（`100px`）逐渐变化到 50% 时的中间值（`200px`），然后到 100% 时的最终值（`500px`）。

2. **动画的影响范围**：动画只在动画 **运行期间** 对元素的属性产生影响。动画的结束并不意味着元素的属性会“永久”保持在动画的最后状态，除非你 **明确地** 在动画结束后让它保持在某个值。

3. **为什么会回到原位？**
   - CSS 动画并不**持久性地修改元素的样式**。它只是暂时改变了元素在动画过程中定义的样式（比如 `margin-left`）。**动画完成后，元素的样式会恢复到定义的初始值**。
   - 在你这个例子里，`margin-left` 在动画结束时变为 `500px`，但是动画结束后，元素的样式会 **恢复到最初的状态**。因为在 **CSS 中**，你设置的 `margin-left: 100px` 仍然是 `.car` 元素的 **初始值**，所以动画结束后它会回到 `100px`。

### 如何解决这个问题？

#### 方案 1：使用 `animation-fill-mode: forwards;`
为了让元素在动画结束后保留最后一个关键帧的样式，我们需要使用 `animation-fill-mode: forwards;` 属性。这个属性的作用是：**在动画结束时，保持动画最后帧的样式**。

修改后的代码：

```css
.car {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-left: 100px;
    background: red;
    animation: run 3s linear forwards; /* 加上 forwards */
}

@keyframes run {
    50% {
        margin-left: 200px;
    }

    100% {
        margin-left: 500px;
    }
}
```

### 解释：
- **`forwards`** 使得元素在动画结束时**保持最后一个关键帧的状态**，即 `margin-left: 500px`。
- 这样，动画结束后，`.car` 将停留在 `500px` 位置，而不会回到原始的 `100px`。

### 总结：
- 默认情况下，CSS 动画只会在 **动画运行时** 改变元素的样式，并在动画结束后恢复到**初始状态**。
- 为了让元素在动画结束后保持在最后状态，你需要使用 `animation-fill-mode: forwards;`，这将使动画结束时保持最后一个关键帧的样式。

