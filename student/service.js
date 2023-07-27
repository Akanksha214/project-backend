import { logger } from "../config/logger";
import { get, isEmpty } from "lodash";
import { ResponseHelper } from "../utils";
import { defaultMessage } from "../utils/constant";

import {
    Student,
  sequelize

} from "../model";

import { Op, QueryTypes } from "sequelize";



export class StudentData{

  constructor() {
    this.responseHelper = new ResponseHelper();


  }

  async addData(req, res) {

    console.log("sfsg")
    const t = await sequelize.transaction();
    try {
      console.log("req.body------->", req.body);
      
      const response = await Student.create({sName:req?.body?.sName,phno:req?.body?.phno,address:req?.body?.address,email:req?.body?.email},{ transaction: t, logging: true })
      await t.commit()
      logger.debug("user added successfully");
      res.json({
        msg:'sucess',
        data:response
      })
      // return this.responseHelper.onSuccess(
      //   res,
      //   "user added successfully",
      //   response
      // );
    } catch (error) {
      console.log("eror.......",error)
      if (error.response && error.response.status === 404) {
        return this.responseHelper.notFound(res, defaultMessage.NOT_FOUND);
      } else {
      //   logger.error(error, defaultMessage.NOT_AUTHORIZED);
      //   return this.responseHelper.notAuthorized(
      //     res,
      //     new Error("No addedd")
      //   );
      }
    } finally {
      if (t && !t.finished) {
        await t.rollback();
      }
    }
  }

  async getData(req, res) {

    try {
      console.log("req.body------xxx->", req.body);
      // const response = await User.findOne({
      //   where: { id: req?.body?.id }, 
      //    attributes: ['id', 'name', 'contactNo'] 

      // });

      const response=await Student.findAll();
      console.log("res......",response)
      // const response=await User.findOne();

      logger.debug("user update successfully");
      res.json({
        "msg":"sucess",
        "data":response
      })
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return this.responseHelper.notFound(res, defaultMessage.NOT_FOUND);
      } else {
        // logger.error(error, defaultMessage.NOT_AUTHORIZED);
        // return this.responseHelper.notAuthorized(
        //   res,
        //   new Error("No addedd")
        // );
      }
    //  } finally {
    //   if (t && !t.finished) {
    //     await t.rollback();
    //    }
    //  }
  }

  
}
}