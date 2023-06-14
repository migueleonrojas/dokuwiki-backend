const validateSchema = (schema: any) => (req: any, res: any, next: any) => {


  const { error } = (Object.keys(req.query).length === 0) ? schema.validate(req.body):schema.validate(req.query);
  

  if (error) {
    res.status(422).send({
      status: 422,
      message: error.details[0].message,
    });
  }
  else {
    next();
  }

}

export default {
  validateSchema
}