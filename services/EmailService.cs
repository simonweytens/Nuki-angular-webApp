using EmailStoreApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace EmailStoreApi.Services;

public class EmailService
{
    private readonly IMongoCollection<Adresses> _emailsCollection;

    public EmailService(
        IOptions<EmailStoreDatabaseSettings> emailStoreDatabaseSettings
    )
    {
        var mongoClient = new MongoClient(
            emailStoreDatabaseSettings.Value.ConnectionString
        );
        var mongoDatabase = mongoClient.GetDatabase(
            emailStoreDatabaseSettings.Value.DatabaseName
        );
        _emailsCollection = mongoDatabase.GetCollection<Adresses>(
            emailStoreDatabaseSettings.Value.EmailCollectionName
        );
    }

    public async Task<List<Adresses>> GetAsync() =>
        await _emailsCollection.Find(_ => true).ToListAsync();


    public async Task<Adresses?> GetAsync(string id) =>
        await _emailsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    
    public async Task CreateAsync(Adresses newEmail) =>
        await _emailsCollection.InsertOneAsync(newEmail);

    public async Task UpdateAsync(string id, Adresses updatedEmail) =>
        await _emailsCollection.ReplaceOneAsync(x => x.Id == id, updatedEmail);
    public async Task RemoveAsync(string id) =>
        await _emailsCollection.DeleteOneAsync(x => x.Id == id);

}