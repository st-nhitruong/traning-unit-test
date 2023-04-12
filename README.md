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
- TC1: Kiểm tra với mảng rỗng
  + Input [] 
  + Expected false
- TC2: Kiểm tra với chỉ 1 giá trị trong mảng
  + Input [9]
  + Expected true
- TC3: Kiểm tra với mảng tăng dần nhưng chứa giá trị undefined
  + Input [3, 9, undefined, 10]
  + Expected false
- TC4: Kiểm tra với mảng chứa giá trị string rỗng
  + Input [3, 9, '', 10]
  + Expected false

  + Input ['', 3, 9, 10]
  + Expected true
- TC5: Kiểm tra với mảng chứa giá trị string
  + Input ['a', 3, 9, 10]
  + Expected false
- TC6: Kiểm tra với mảng chứa giá trị trùng lặp
  + Input [3, 3, 5] 
  + Expected: true

  + Input [6, 3, 3, 5] 
  + Expected: false
- TC7: Kiểm tra với mảng chứa số nguyên âm
  + Input [-10, 18, 26, 33] 
  + Expected: true
- TC8: Kiểm tra với thứ tự của mảng đã sắp xếp giảm dần
  + Input [10, 8, 6, 3] 
  + Expected: false
- TC9: Kiểm tra với thứ tự của mảng đã sắp xếp tăng dần
  + Input [1, 5, 9, 20] 
  + Expected: true