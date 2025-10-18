document.addEventListener('DOMContentLoaded', () => {
  const bgColor = document.getElementById('bgColor')
  const fontColor = document.getElementById('fontColor')
  const fontSize = document.getElementById('fontSize')
  const saveBtn = document.getElementById('saveBtn')
  const resetBtn = document.getElementById('resetBtn')

  // 🟡 โหลดค่าที่บันทึกไว้ใน LocalStorage (ถ้ามี)
  const savedBg = localStorage.getItem('bgColor')
  const savedFontColor = localStorage.getItem('fontColor')
  const savedFontSize = localStorage.getItem('fontSize')

  if (savedBg) {
        document.body.style.backgroundColor = savedBg
    }
  if (savedFontColor) 
    {
        document.body.style.color = savedFontColor
    }
  if (savedFontSize) {
        document.body.style.fontSize = savedFontSize
    }

  // 🟢 แสดงค่าที่โหลดไว้ใน input
  if (savedBg) {
        bgColor.value = savedBg
    }
  if (savedFontColor) {
        fontColor.value = savedFontColor
    }
  if (savedFontSize) {
        fontSize.value = savedFontSize
    }
  // 🔵 เมื่อกดปุ่ม Save → บันทึกค่าลง LocalStorage และเปลี่ยนหน้าเว็บทันที
  saveBtn.addEventListener('click', () => {
    const bgValue = bgColor.value;
    const fontValue = fontColor.value
    const sizeValue = fontSize.value

    localStorage.setItem('bgColor', bgValue)
    localStorage.setItem('fontColor', fontValue)
    localStorage.setItem('fontSize', sizeValue)

    document.body.style.backgroundColor = bgValue
    document.body.style.color = fontValue
    document.body.style.fontSize = sizeValue

  })


  resetBtn.addEventListener('click', () => {
    localStorage.clear()

    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.body.style.fontSize = 'medium'

    bgColor.value = '#ffffff'
    fontColor.value = '#000000'
    fontSize.value = 'medium'

  })
})
