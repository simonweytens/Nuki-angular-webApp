using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EmailStoreApi.Models;

public class Adresses
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id {get; set;}
    [BsonElement("Email")]
    public string EmailAdress {get; set;} = null!;
}