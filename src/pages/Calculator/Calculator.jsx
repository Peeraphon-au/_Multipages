import React, { useEffect } from 'react';

import './Calculator.css';

function Calculator() {
    let currentInput = '';      // สำหรับเก็บตัวเลขที่กำลังพิมพ์
    let previousInput = '';     // สำหรับเก็บตัวเลขแรก
    let operator = '';          // สำหรับเก็บเครื่องหมายการคำนวณ
    let lastOperator = '';      // เก็บเครื่องหมายการคำนวณครั้งล่าสุด
    let lastNumber = '';        // เก็บตัวเลขครั้งล่าสุด
    const appendNumber = (number) => {
        if (number === '.' && currentInput.includes('.')) {
            return;
        }
        if (currentInput.length >= 9 && number !== '.') {
            return;
        }
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        }
        else {
            currentInput += number;
        }
        updateDisplay(currentInput);
        updateClearButton();
    };

    const appendOperator = (op) => {
        if (currentInput === '') return; // ถ้าไม่มีตัวเลข ก็ไม่ทำอะไร
        if (previousInput !== '') calculate();  // ถ้ามีการคำนวณก่อนหน้า ให้คำนวณก่อน
        previousInput = currentInput;    // เก็บค่าตัวเลขแรก
        operator = op;                   // เก็บค่าเครื่องหมายการคำนวณ
        currentInput = '';               // เคลียร์ค่า currentInput เพื่อเริ่มพิมพ์ตัวเลขถัดไป
    };

    const calculate = () => {
        if (previousInput === '' && lastNumber !== '') {
            //เมื่อกด = ในขณะที่มีการคำนวณแล้ว จะทำการคำนวณด้วยค่าใน current
            previousInput = currentInput;
            operator = lastOperator;
            currentInput = lastNumber;
        }
        else if (currentInput === '') {
            //เมื่อกด = ในขณะที่มีค่าใน current จะทำการคำนวณด้วยค่าใน previous
            currentInput = previousInput;
        }
        if (previousInput === '' || currentInput === '' || operator === '') return;

        let result;

        // เปลี่ยนให้เป็นตัวเลขทศนิยม
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        // เครื่องหมาย
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        // ลิมิตตัวเลขที่ 9 ตัว
        const formattedResult = result.toString().substring(0, 9);
        updateDisplay(formattedResult);
        lastNumber = currentInput;
        lastOperator = operator;
        currentInput = formattedResult;
        previousInput = '';
        operator = '';
        updateClearButton();
    };

    const clearEntry = () => {
        if (currentInput !== '') {
            currentInput = ''
        }
        else {
            currentInput = '';
            previousInput = '';
            operator = '';
            lastNumber = '';
            lastOperator = '';
        }
        updateDisplay(0);
        updateClearButton();
    };

    const deletel = () => {
        currentInput = currentInput.slice(0, -1);  // ลบตัวเลขตัวสุดท้าย
        updateDisplay(currentInput || '0');        // อัพเดทหน้าจอแสดงผล
        updateClearButton();
    };

    const updateDisplay = (value) => {
        const display = document.querySelector('.current');
        display.innerText = value;
    };

    const updateClearButton = () => {
        const clearButton = document.querySelector('.AC');
        if (currentInput !== '' || previousInput !== '') {
            clearButton.innerText = 'C'; // แสดง "C" ถ้ามีค่า
        } else {
            clearButton.innerText = 'AC'; // แสดง "AC" ถ้าไม่มีค่า
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        updateClearButton();
    });

    useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Enter':
        case '=':
          calculate();  // ปุ่ม "=" คำนวณ
          break;
        case 'Escape':
          clearEntry(); // ปุ่ม "Esc" เคลียร์
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          appendOperator(e.key);  // ปุ่มเครื่องหมาย + - * /
          break;
        case 'Backspace':
          deletel();  // ปุ่มลบ ⬅
          break;
        case '.':
          appendNumber(e.key);  // ปุ่มจุดทศนิยม
          break;
        default:
          if (e.key >= '0' && e.key <= '9') {
            appendNumber(e.key);  // ปุ่มเลข 9 ตัว
          }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentInput, previousInput, operator]);

    return (
        <div className="Calculator">
            <section className="screen">
                <div className="current">0</div>
            </section>

            <section className="Calculator-row">
                <div className="Calculator_row">
                    <button className="btn-n btn white top AC text-dark  btn-light" onClick={clearEntry}>AC</button>
                    <button className="btn-n btn white top text-dark btn-light">+/-</button>
                    <button className="btn-n btn white top text-dark btn-light">%</button>
                    <button className="btn-n btn text-white" onClick={() => appendOperator('/')}>÷</button>
                </div>

                <div className="Calculator_row">
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('7')}>7</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('8')}>8</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('9')}>9</button>
                    <button className="btn-n btn text-white" onClick={() => appendOperator('*')}>x</button>
                </div>

                <div className="Calculator_row">
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('4')}>4</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('5')}>5</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('6')}>6</button>
                    <button className="btn-n btn text-white" onClick={() => appendOperator('-')}>-</button>
                </div>

                <div className="Calculator_row">
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('1')}>1</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('2')}>2</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('3')}>3</button>
                    <button className="btn-n btn text-white" onClick={() => appendOperator('+')}>+</button>
                </div>

                <div className="Calculator_row">
                    <button className="btn-n btn large text-white btn-secondary" onClick={() => appendNumber('0')}>0</button>
                    <button className="btn-n btn text-white btn-secondary" onClick={() => appendNumber('.')}>.</button>
                    <button className="btn-n btn text-white" onClick={calculate}>=</button>
                </div>
            </section>
        </div>
    );
}

export default Calculator;