export class ValidationError extends Error{
    constructor(message: string){
        super(message)
        this.name = 'ValidationError'
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'NotFoundError';
    }
  }

  export class DatabaseError extends Error {
    constructor(message: string, public originalError?: Error){
        super(message);
        this.name = 'Database Error'
    }
}