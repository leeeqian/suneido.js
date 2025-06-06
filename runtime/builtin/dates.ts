import { SuDate, normalize } from "../sudate";
import * as util from "../utility";
import { SuObject } from "../suobject";
import { mandatory, maxargs } from "../args";
import { SuBuiltinClass } from "./subuiltinclass";
import { toInt, toStr, coerceStr } from "../ops";

const BEGIN = SuDate.literal('17000101')!;
const END = SuDate.literal('30000101')!;

const tsPat = /^\d\d\d\d\d\d\d\d\.\d\d\d\d\d\d\d\d\d\d\d\d$/

class DateClass extends SuBuiltinClass {
    protected className = "Date";
    protected newInstance(_s?: any, _order?: any,
        _year?: any, _month?: any, _day?: any,
        _hour?: any, _minute?: any, _second?: any, _millisecond?: any) {
        if (_year || _month || _day || _hour || _minute || _second || _millisecond) {
            if (_s)
                throw new Error("bad arguments to Date");
            let t = BEGIN;
            ({ _year = t.Year(), _month = t.Month(), _day = t.Day(), _hour = t.Hour(),
                _minute = t.Minute(), _second = t.Second(), _millisecond = t.Millisecond()
                } = { _year, _month, _day, _hour, _minute, _second, _millisecond });
            return normalize(toInt(_year), toInt(_month), toInt(_day), toInt(_hour),
                toInt(_minute), toInt(_second), toInt(_millisecond));
        } else if (_s) {
            if (_s instanceof SuDate)
                return _s;
            let s = coerceStr(_s);
            let d;
            if (s.startsWith("#") || s.search(tsPat) === 0)
                d = SuDate.literal(s);
            else if (_order === undefined)
                d = SuDate.parse(s);
            else
                d =  SuDate.parse(s, toStr(_order));
            return d == null ? false : d;
        } else if (_s === false) {
            return false;
        } else {
            return SuDate.now();
        }
    }
    Begin(): SuDate {
        maxargs(0, arguments.length);
        return BEGIN;
    }
    End(): SuDate {
        maxargs(0, arguments.length);
        return END;
    }
}

export const DATE_CLASS = new DateClass();

export function su_dateq(x: any = mandatory()): boolean {
    maxargs(1, arguments.length);
    return x instanceof SuDate;
}
//BUILTIN Date?(x)
//GENERATED start
(su_dateq as any).$call = su_dateq;
(su_dateq as any).$callNamed = function ($named: any, x: any) {
    maxargs(2, arguments.length);
    ({ x = x } = $named);
    return su_dateq(x);
};
(su_dateq as any).$callAt = function (args: SuObject) {
    return (su_dateq as any).$callNamed(util.mapToOb(args.map), ...args.vec);
};
(su_dateq as any).$callableType = "BUILTIN";
(su_dateq as any).$callableName = "Date?";
(su_dateq as any).$params = 'x';
//GENERATED end

//BUILTIN DateClass.newInstance(s="", order="yMd", year=false, month=false, day=false, hour=false, minute=false, second=false, millisecond=false)
//GENERATED start
(DateClass.prototype['newInstance'] as any).$call = DateClass.prototype['newInstance'];
(DateClass.prototype['newInstance'] as any).$callNamed = function ($named: any, s: any, order: any, year: any, month: any, day: any, hour: any, minute: any, second: any, millisecond: any) {
    maxargs(10, arguments.length);
    ({ s = s, order = order, year = year, month = month, day = day, hour = hour, minute = minute, second = second, millisecond = millisecond } = $named);
    return DateClass.prototype['newInstance'].call(this, s, order, year, month, day, hour, minute, second, millisecond);
};
(DateClass.prototype['newInstance'] as any).$callAt = function (args: SuObject) {
    return (DateClass.prototype['newInstance'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(DateClass.prototype['newInstance'] as any).$callableType = "BUILTIN";
(DateClass.prototype['newInstance'] as any).$callableName = "DateClass#newInstance";
(DateClass.prototype['newInstance'] as any).$params = 's="", order="yMd", year=false, month=false, day=false, hour=false, minute=false, second=false, millisecond=false';
//GENERATED end

//BUILTIN DateClass.Begin()
//GENERATED start
(DateClass.prototype['Begin'] as any).$call = DateClass.prototype['Begin'];
(DateClass.prototype['Begin'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return DateClass.prototype['Begin'].call(this);
};
(DateClass.prototype['Begin'] as any).$callAt = function (args: SuObject) {
    return (DateClass.prototype['Begin'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(DateClass.prototype['Begin'] as any).$callableType = "BUILTIN";
(DateClass.prototype['Begin'] as any).$callableName = "DateClass#Begin";
(DateClass.prototype['Begin'] as any).$params = '';
//GENERATED end

//BUILTIN DateClass.End()
//GENERATED start
(DateClass.prototype['End'] as any).$call = DateClass.prototype['End'];
(DateClass.prototype['End'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return DateClass.prototype['End'].call(this);
};
(DateClass.prototype['End'] as any).$callAt = function (args: SuObject) {
    return (DateClass.prototype['End'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(DateClass.prototype['End'] as any).$callableType = "BUILTIN";
(DateClass.prototype['End'] as any).$callableName = "DateClass#End";
(DateClass.prototype['End'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Year()
//GENERATED start
(SuDate.prototype['Year'] as any).$call = SuDate.prototype['Year'];
(SuDate.prototype['Year'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Year'].call(this);
};
(SuDate.prototype['Year'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Year'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Year'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Year'] as any).$callableName = "SuDate#Year";
(SuDate.prototype['Year'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Month()
//GENERATED start
(SuDate.prototype['Month'] as any).$call = SuDate.prototype['Month'];
(SuDate.prototype['Month'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Month'].call(this);
};
(SuDate.prototype['Month'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Month'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Month'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Month'] as any).$callableName = "SuDate#Month";
(SuDate.prototype['Month'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Day()
//GENERATED start
(SuDate.prototype['Day'] as any).$call = SuDate.prototype['Day'];
(SuDate.prototype['Day'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Day'].call(this);
};
(SuDate.prototype['Day'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Day'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Day'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Day'] as any).$callableName = "SuDate#Day";
(SuDate.prototype['Day'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Hour()
//GENERATED start
(SuDate.prototype['Hour'] as any).$call = SuDate.prototype['Hour'];
(SuDate.prototype['Hour'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Hour'].call(this);
};
(SuDate.prototype['Hour'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Hour'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Hour'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Hour'] as any).$callableName = "SuDate#Hour";
(SuDate.prototype['Hour'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Minute()
//GENERATED start
(SuDate.prototype['Minute'] as any).$call = SuDate.prototype['Minute'];
(SuDate.prototype['Minute'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Minute'].call(this);
};
(SuDate.prototype['Minute'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Minute'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Minute'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Minute'] as any).$callableName = "SuDate#Minute";
(SuDate.prototype['Minute'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Second()
//GENERATED start
(SuDate.prototype['Second'] as any).$call = SuDate.prototype['Second'];
(SuDate.prototype['Second'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Second'].call(this);
};
(SuDate.prototype['Second'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Second'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Second'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Second'] as any).$callableName = "SuDate#Second";
(SuDate.prototype['Second'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.Millisecond()
//GENERATED start
(SuDate.prototype['Millisecond'] as any).$call = SuDate.prototype['Millisecond'];
(SuDate.prototype['Millisecond'] as any).$callNamed = function (_named: any) {
    maxargs(1, arguments.length);
    return SuDate.prototype['Millisecond'].call(this);
};
(SuDate.prototype['Millisecond'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Millisecond'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Millisecond'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Millisecond'] as any).$callableName = "SuDate#Millisecond";
(SuDate.prototype['Millisecond'] as any).$params = '';
//GENERATED end

//BUILTIN SuDate.FormatEn(format)
//GENERATED start
(SuDate.prototype['FormatEn'] as any).$call = SuDate.prototype['FormatEn'];
(SuDate.prototype['FormatEn'] as any).$callNamed = function ($named: any, format: any) {
    maxargs(2, arguments.length);
    ({ format = format } = $named);
    return SuDate.prototype['FormatEn'].call(this, format);
};
(SuDate.prototype['FormatEn'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['FormatEn'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['FormatEn'] as any).$callableType = "BUILTIN";
(SuDate.prototype['FormatEn'] as any).$callableName = "SuDate#FormatEn";
(SuDate.prototype['FormatEn'] as any).$params = 'format';
//GENERATED end

//BUILTIN SuDate.MinusDays(date)
//GENERATED start
(SuDate.prototype['MinusDays'] as any).$call = SuDate.prototype['MinusDays'];
(SuDate.prototype['MinusDays'] as any).$callNamed = function ($named: any, date: any) {
    maxargs(2, arguments.length);
    ({ date = date } = $named);
    return SuDate.prototype['MinusDays'].call(this, date);
};
(SuDate.prototype['MinusDays'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['MinusDays'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['MinusDays'] as any).$callableType = "BUILTIN";
(SuDate.prototype['MinusDays'] as any).$callableName = "SuDate#MinusDays";
(SuDate.prototype['MinusDays'] as any).$params = 'date';
//GENERATED end

//BUILTIN SuDate.MinusSeconds(date)
//GENERATED start
(SuDate.prototype['MinusSeconds'] as any).$call = SuDate.prototype['MinusSeconds'];
(SuDate.prototype['MinusSeconds'] as any).$callNamed = function ($named: any, date: any) {
    maxargs(2, arguments.length);
    ({ date = date } = $named);
    return SuDate.prototype['MinusSeconds'].call(this, date);
};
(SuDate.prototype['MinusSeconds'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['MinusSeconds'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['MinusSeconds'] as any).$callableType = "BUILTIN";
(SuDate.prototype['MinusSeconds'] as any).$callableName = "SuDate#MinusSeconds";
(SuDate.prototype['MinusSeconds'] as any).$params = 'date';
//GENERATED end

//BUILTIN SuDate.Plus(years=0, months=0, days=0, hours=0, minutes=0, seconds=0, milliseconds=0)
//GENERATED start
(SuDate.prototype['Plus'] as any).$call = SuDate.prototype['Plus'];
(SuDate.prototype['Plus'] as any).$callNamed = function ($named: any, years: any, months: any, days: any, hours: any, minutes: any, seconds: any, milliseconds: any) {
    maxargs(8, arguments.length);
    ({ years = years, months = months, days = days, hours = hours, minutes = minutes, seconds = seconds, milliseconds = milliseconds } = $named);
    return SuDate.prototype['Plus'].call(this, years, months, days, hours, minutes, seconds, milliseconds);
};
(SuDate.prototype['Plus'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['Plus'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['Plus'] as any).$callableType = "BUILTIN";
(SuDate.prototype['Plus'] as any).$callableName = "SuDate#Plus";
(SuDate.prototype['Plus'] as any).$params = 'years=0, months=0, days=0, hours=0, minutes=0, seconds=0, milliseconds=0';
//GENERATED end

//BUILTIN SuDate.WeekDay(firstday="Sun")
//GENERATED start
(SuDate.prototype['WeekDay'] as any).$call = SuDate.prototype['WeekDay'];
(SuDate.prototype['WeekDay'] as any).$callNamed = function ($named: any, firstday: any) {
    maxargs(2, arguments.length);
    ({ firstday = firstday } = $named);
    return SuDate.prototype['WeekDay'].call(this, firstday);
};
(SuDate.prototype['WeekDay'] as any).$callAt = function (args: SuObject) {
    return (SuDate.prototype['WeekDay'] as any).$callNamed.call(this, util.mapToOb(args.map), ...args.vec);
};
(SuDate.prototype['WeekDay'] as any).$callableType = "BUILTIN";
(SuDate.prototype['WeekDay'] as any).$callableName = "SuDate#WeekDay";
(SuDate.prototype['WeekDay'] as any).$params = 'firstday="Sun"';
//GENERATED end
