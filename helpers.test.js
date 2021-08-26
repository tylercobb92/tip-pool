describe("payment info (with setup and teardown)", function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('should calculate tip percent of single transaction on calculateTipPercent(billAmt, tipAmt)', function () {
        expect(calculateTipPercent(100, 18)).toEqual(18);
        expect(calculateTipPercent(1, 0.08)).toEqual(8);
    })

    it('should calculate total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should calculate total bill amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(50);

        billAmtInput.value = 25;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(75);
    })

    it('should calculate total tip amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 25;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
    })

    it('should create and append a new td to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
    })

    it('should append a delete button with an X to tr on appendDeleteBtn()', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('X');
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