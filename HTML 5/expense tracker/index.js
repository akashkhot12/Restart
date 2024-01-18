document.addEventListener("DOMContentLoaded", () => {
    loadExpenses();
});

function addExpense() {
    const description = document.getElementById("expenseDescription").value.trim();
    const amount = parseFloat(document.getElementById("expenseAmount").value);

    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const expense = {
        id: new Date().getTime(),
        description,
        amount
    };

    const expenses = getExpenses();
    expenses.push(expense);
    saveExpenses(expenses);

    clearInputFields();
    loadExpenses();
    updateTotalExpenses();
}

function loadExpenses() {
    const expensesList = document.getElementById("expensesList");
    expensesList.innerHTML = "";

    const expenses = getExpenses();

    expenses.forEach(expense => {
        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";
        expenseItem.innerHTML = `
            <span>${expense.description}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expensesList.appendChild(expenseItem);
    });

    updateTotalExpenses();
}

function deleteExpense(id) {
    const expenses = getExpenses();
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    saveExpenses(updatedExpenses);
    loadExpenses();
}

function updateTotalExpenses() {
    const expenses = getExpenses();
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);
}

function saveExpenses(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpenses() {
    const expensesString = localStorage.getItem("expenses");
    return JSON.parse(expensesString) || [];
}

function clearInputFields() {
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
}
