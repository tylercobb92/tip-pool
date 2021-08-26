describe("Payments test (with setup and teardown)", function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
        expect(Object.keys(allPayments).length).toEqual(1);
    })

    it('should not create a new payment if fields are empty on submitPaymentInfo()', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should create a new payment on createCurPayment()', function () {
        let newPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        }

        expect(createCurPayment()).toEqual(newPayment);
    })

    it('should create and append a new tr to paymentTbody on appendPaymentTable()', function () {
        let payment = createCurPayment();
        allPayments['payment1'] = payment;

        appendPaymentTable(payment);

        let tdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(tdList[0].innerHTML).toEqual('$50');
        expect(tdList[1].innerHTML).toEqual('$10');
        expect(tdList[2].innerHTML).toEqual('20%');
    })

    it('should calculate total bill, total tip, and average tip percent on updateSummary()', function () {
        let payment1 = createCurPayment();
        allPayments['payment1'] = payment1;

        updateSummary();

        expect(summaryTds[0].textContent).toEqual('$50');
        expect(summaryTds[1].textContent).toEqual('$10');
        expect(summaryTds[2].textContent).toEqual('20%');
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
        allPayments = {};
        paymentId = 0;
    })
})