/**
 * flattenObj
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2023-06-09 17:21
 * @LastEditTime: 2023-06-09 17:21
 * @Description: flattenObj
 */
export function flattenObject(obj, prefix = '') {
  let result = {};
  for (let key in obj) {
    // FIXME
    // vite 构建时会出现 obj.hasOwnProperty is not a function 错误
    // 通常出现在调用对象的 hasOwnProperty 方法时，原因是该对象没有继承自 Object.prototype 或者已经被修改了它的原型链。这个错误可能会影响到一些涉及 hasOwnProperty 的操作，例如循环遍历对象或者检查对象属性。
    //
    // 为了避免这个错误，可以通过以下几种方式进行修复：
    //
    // 使用 Object.prototype.hasOwnProperty.call(obj, prop)：这种方法可以确保在任何情况下都能够正确地调用对象的 hasOwnProperty 方法，同时避免了可能存在的原型链污染问题。
    //
    // 使用 Object.getOwnPropertyNames(obj).indexOf(prop) !== -1：这种方法首先获取对象的所有属性名，并判断目标属性是否包含在其中，以此来模拟 hasOwnProperty 方法的行为。
    //
    // 检查对象是否继承自 Object.prototype：这种方法可以通过检查对象的原型链来判断对象是否直接继承自 Object.prototype，如果不是，则说明该对象可能不存在 hasOwnProperty 方法。可以通过以下代码进行检查：
    //
    // javascript
    //     Object.getPrototypeOf(obj) === Object.prototype
    //     需要注意的是，虽然在大多数情况下都可以使用 hasOwnProperty 方法来检查对象属性，但在特殊情况下可能会出现上述错误。因此，在对不确定的对象进行操作时，建议使用上述方法进行更加安全和准确的属性检查。
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const propName = key;
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], propName));
      } else {
        result[propName] = obj[key];
      }
    }
  }
  return result;
}
