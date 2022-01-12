import { Payments } from "./classes/Payments.js";
import { Invoice } from "./classes/Invoice.js";
// let docOne: HasFormatter
// let docTwo: HasFormatter
// docOne = new Invoice("joshi", "web work", 250)
// docTwo = new Payments("mario", "plumbing work", 200)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
// const invOne = new Invoice("Mario", "work on mario website", 250)
// const invTwo = new Invoice("luigi", "work on luigi website", 350)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children)
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
