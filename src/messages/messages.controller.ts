import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {
    @Post()
    create(@Body() createMessageDto: CreateMessageDto){
        return 'message created';
        
    }

    @Get()
    getAll(){
        return 'lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto){
        return 'mensaje borrao';
    }

    @Delete(':id')
    delete(){
        return 'borrao';
    }
}
