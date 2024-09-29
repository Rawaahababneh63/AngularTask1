using System;
using System.Collections.Generic;

namespace Day2.Server.Models;

public partial class CacheTable
{
    public string Id { get; set; } = null!;

    public byte[]? Value { get; set; }

    public DateTimeOffset? ExpiresAtTime { get; set; }

    public long? SlidingExpirationInSeconds { get; set; }

    public DateTimeOffset? AbsoluteExpiration { get; set; }
}
