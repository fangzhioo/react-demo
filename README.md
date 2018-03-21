# react demo
 这是一个简单的学习Reactjs的项目。

* 学习教程来自以下：
  - [React 中文文档 by Facebook](https://doc.react-china.org/)
  - [Reactjs 小书 by 胡子大哈](http://huziketang.com/books/react/)
  - ...
  
## 总结

* 组件中的函数 按照一定的顺序来编写，有利于代码的阅读和维护。
 - 组件的内容编写顺序如下：
  1. static 开头的类属性，如 defaultProps、propTypes。
  2. 构造函数，constructor。
  3. getter/setter（还不了解的同学可以暂时忽略）。
  4. 组件生命周期。
  5. _ 开头的私有方法。
  6. 事件监听方法，handle*。
  7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
  8. render() 方法。

* git常用命令
![](https://www.git-tower.com/blog/content/posts/54-git-cheat-sheet/git-cheat-sheet-large01.png)