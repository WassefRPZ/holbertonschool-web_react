/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
var Subjects;
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWVBO0lBQUE7SUFZQSxDQUFDO0lBWEcsK0JBQVksR0FBWjtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEcsOEJBQVksR0FBWjtRQUNJLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBRXhCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUMvQyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQ2hELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDcEM7U0FBTTtRQUNOLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDbkM7QUFDRixDQUFDO0FBRUQsSUFBSSxRQUE0QixDQUFDO0FBRWpDLFNBQVMsVUFBVSxDQUFDLFVBQWtCO0lBQ3JDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUMxQixPQUFPLGVBQWUsQ0FBQztLQUN2QjtTQUFNO1FBQ04sT0FBTyxrQkFBa0IsQ0FBQztLQUMxQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIFxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIFxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nOyBcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZXtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgICB9XG5cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gICAgfVxuXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2V7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiO1xuICAgIH1cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gICAgfVxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlcntcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG5cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG5cdHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogVGVhY2hlciB8IERpcmVjdG9yKTogc3RyaW5nIHtcblx0aWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcblx0fVxufVxuXG5sZXQgU3ViamVjdHM6IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XG5cdFx0cmV0dXJuIFwiVGVhY2hpbmcgTWF0aFwiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==