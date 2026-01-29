/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

;
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9DLENBQUM7QUFRRixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFpQixFQUFFLFFBQWdCO0lBQzdFLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7QUFFeEMsQ0FBQyxDQUFDO0FBWUY7SUFHSSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7SUFDNUIsQ0FBQztJQUNELHFDQUFjLEdBQWQ7UUFDSSxPQUFPLG1CQUFtQjtJQUM5QixDQUFDO0lBQ0Qsa0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVM7SUFDekIsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xufTtcbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbntcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZmlyc3ROYW1lWzBdICsgXCIuIFwiICsgbGFzdE5hbWU7XG5cbn07XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZ1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzQ29uc3RydWN0b3Ige1xuICAgIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG4gICAgXG59XG5cbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZVxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWVcbiAgICB9XG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiXG4gICAgfVxuICAgIGRpc3BsYXlOYW1lKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWVcbiAgICB9XG5cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=