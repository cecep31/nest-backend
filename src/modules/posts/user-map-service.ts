import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class UserSocketMapService {
  private postRoomUserMap: Map<string, Map<string, Socket>> = new Map();

  addUserToRoom(userId: string, roomId: string, socket: Socket) {
    if (!this.postRoomUserMap.has(roomId)) {
      this.postRoomUserMap.set(roomId, new Map());
    }
    // Using non-null assertion operator (!) since we know roomId exists in the map
    this.postRoomUserMap.get(roomId)!.set(userId, socket);
  }

  removeUserFromRoom(userId: string, roomId: string) {
    const roomMap = this.postRoomUserMap.get(roomId);
    if (roomMap) {
      roomMap.delete(userId);
      if (roomMap.size === 0) {
        this.postRoomUserMap.delete(roomId);
      }
    }
  }

  getSocketByUserId(userId: string): Socket | undefined {
    if (!userId) {
      return undefined;
    }
    const roomMap = this.postRoomUserMap.get(userId);
    if (!roomMap) {
      return undefined;
    }
    return roomMap.get(userId);
  }

  getUserIdBySocket(socket: Socket): string | undefined {
    // Iterate through the map to find the user ID associated with the socket
    for (const [, userMap] of this.postRoomUserMap.entries()) {
      for (const [userId, userSocket] of userMap.entries()) {
        if (userSocket === socket) {
          return userId;
        }
      }
    }
    // If the socket is not associated with any user, return undefined
    return undefined;
  }
}