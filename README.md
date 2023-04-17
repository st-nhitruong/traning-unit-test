# traning-unit-test
### 1. Hãy nêu các bước viết unit test
- Identify all possible case
- Specify parameters and expected results for each case
- Write test
- Execute test
- Evaluation and assessment of results

Evaluation and assessment of results
### 2. Hãy nêu các thành phần cơ bản có trong 1 unit test
- Test suit
- Block test
- Test case
- Action
- Assert
### 3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không.
- Kiểm tra giá trị nhập vào không phải là mảng
  + Input 'lalal'
  + Expected false

  + Input {}
  + Expected false
- Kiểm tra với mảng rỗng
  + Input [] 
  + Expected false
- Kiểm tra với chỉ 1 giá trị trong mảng
  + Input [9]
  + Expected false
- Kiểm tra với mảng tăng dần nhưng chứa giá trị undefined
  + Input [3, 9, undefined, 10]
  + Expected false
- Kiểm tra với mảng tăng dần nhưng chứa giá trị null
  + Input [3, 9, null, 10]
  + Expected false
- Kiểm tra với mảng chứa giá trị string
  + Input ['a', 3, 9, 10]
  + Expected false
- Kiểm tra với mảng chứa giá trị trùng lặp
  + Input [3, 3, 5] 
  + Expected: true

  + Input [6, 3, 3, 5] 
  + Expected: false
- Kiểm tra với mảng chứa số nguyên âm
  + Input [-10, 18, 26, 33] 
  + Expected: true
- Kiểm tra với mảng chứa số thập phân
  + Input [0.5, 18, 26, 33]
  + Expected: true
- Kiểm tra với thứ tự của mảng đã sắp xếp giảm dần
  + Input [10, 8, 6, 3] 
  + Expected: false
- Kiểm tra với thứ tự của mảng đã sắp xếp tăng dần
  + Input [1, 5, 9, 20] 
  + Expected: true