"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_base_service_1 = require("./client-base.service");
const create_client_base_dto_1 = require("./dto/create-client-base.dto");
const swagger_1 = require("@nestjs/swagger");
let QuotesController = class QuotesController {
    constructor(quotesService) {
        this.quotesService = quotesService;
    }
    getQuotes() {
        return this.quotesService.getQuotes();
    }
    getQuote(id) {
        return this.quotesService.getQuote(id);
    }
    async createQuote(createQuoteDto) {
        try {
            return await this.quotesService.createQuote(createQuoteDto);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    updateQuote(id, updateQuoteDto) {
        return this.quotesService.updateQuote(id, updateQuoteDto);
    }
    deleteQuote(id) {
        return this.quotesService.deleteQuote(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "getQuotes", null);
__decorate([
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "getQuote", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_base_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "createQuote", null);
__decorate([
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_client_base_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "updateQuote", null);
__decorate([
    swagger_1.ApiImplicitParam({ name: 'id' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuotesController.prototype, "deleteQuote", null);
QuotesController = __decorate([
    swagger_1.ApiUseTags('client-base'),
    common_1.Controller('client-base'),
    __metadata("design:paramtypes", [client_base_service_1.QuotesService])
], QuotesController);
exports.QuotesController = QuotesController;
//# sourceMappingURL=client-base.controller.js.map