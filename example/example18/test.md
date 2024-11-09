`line-height` 是一个在 CSS 中非常常见的属性，用来控制文本行与行之间的垂直间距。通过设置 `line-height`，你可以调整文本的行间距，影响文本的可读性和排版效果。

### 简单介绍 `line-height`：
- `line-height` 属性定义了行内元素（如文本）基线到基线的距离。
- 它的值可以是一个数字、长度单位（如 px、em）、百分比或者关键字。

### 解释：`line-height: 50px;`
当你设置 `line-height: 50px;` 时，你是指定每行文本的高度为 50 像素。这意味着文本的行间距（从一行文本的基线到下一行的基线）是 50px。注意，`line-height` 也会影响文本的垂直对齐方式，尤其是当元素高度不足时。

### 示例案例：`line-height: 50px;`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>line-height Example</title>
    <style>
        .normal-line-height {
            line-height: 20px;
            background-color: lightblue;
        }

        .large-line-height {
            line-height: 50px;
            background-color: lightcoral;
        }

        .container {
            width: 300px;
            border: 1px solid #ccc;
            padding: 10px;
        }

        p {
            margin: 0;
        }
    </style>
</head>
<body>

<div class="container">
    <h3>Normal Line Height</h3>
    <p class="normal-line-height">
        This is a paragraph with a normal line-height of 20px.
        This is the second line.
    </p>

    <h3>Large Line Height (50px)</h3>
    <p class="large-line-height">
        This is a paragraph with a line-height of 50px.
        This is the second line.
    </p>
</div>

</body>
</html>
```

### 解析：
1. **`normal-line-height` 类：**
   - `line-height: 20px;` 使得行与行之间的垂直间距是 20px。
   - 文本看起来比较紧凑，行间距较小。

2. **`large-line-height` 类：**
   - `line-height: 50px;` 会将行间距增大至 50px。
   - 这样，每行文本的高度会增加，行与行之间的间距变得更加宽松。

### 结果：

#### `normal-line-height`：
- 在第一段中，每行文本的高度（即行间距）为 20px，因此文本之间的距离较小，文本看起来更紧凑。

#### `large-line-height`：
- 在第二段中，每行文本的高度变为 50px，文本之间的间距显著增加，导致行之间有较大的空间。文字看起来更宽松，易于阅读。

### 小贴士：
- **影响容器高度**：`line-height` 还可以影响文本所在容器的高度。例如，如果你将一个块级元素的高度设置为 50px，并且它的 `line-height` 也是 50px，那么这个元素中的文本会垂直居中。
- **继承性**：`line-height` 是一个**继承属性**，即它会继承给文本中的子元素。如果你为父元素设置了 `line-height`，它的子元素的行间距也会受到影响，除非子元素有明确的覆盖。

### 总结：
通过设置 `line-height: 50px;`，你控制了文本行与行之间的间距。如果行间距过小，文本会显得拥挤；而较大的 `line-height`（如 50px）会让文本看起来更为宽松和易于阅读。