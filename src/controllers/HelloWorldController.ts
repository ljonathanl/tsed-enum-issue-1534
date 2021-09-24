import {Controller, Get} from "@tsed/common";
import {Enum, Property, Required} from "@tsed/schema";
export enum EnumValue {
  One = "one",
  Two = "two",
}

export class NestedEnum {
  @Required()
  @Enum(EnumValue)
  value: EnumValue;
}

export class TestNestedEnum {
  @Property()
  nested: NestedEnum;
}


@Controller("/test")
export class HelloWorldController {
  @Get("/")
  get() {
    const test = new TestNestedEnum();
    const nested = new NestedEnum();
    nested.value = EnumValue.One;
    test.nested = nested;
    return test
  }
}
