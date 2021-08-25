describe("payment info (with setup and teardown)", function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('should calculate tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
})