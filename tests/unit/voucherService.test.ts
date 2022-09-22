import voucherRepository from "../../src/repositories/voucherRepository";
import voucherService from "../../src/services/voucherService";
import * as errorUtils from "../../src/utils/errorUtils";

jest.mock("../../src/repositories/voucherRepository");

describe("Teste unitário de voucher service", () => {

  it("retorna status 409 caso já exista voucher", async () => {
    jest.spyOn(voucherRepository, "getVoucherByCode").mockResolvedValueOnce({
      id: 1,
      discount: 21,
      code: "codigocodigo",
      used: false,
    });
    jest.spyOn(errorUtils,"conflictError").mockReturnValue({type: "conflict", message: 'Voucher already exist.'})
    try{
     const result =  await  voucherService.createVoucher("codigocodigocodigo", 20);
    }catch(error){
        expect(error).toEqual(errorUtils.conflictError('Voucher already exist.'))
    }
     
  });

  
});

