﻿using System;
using System.Collections.Generic;

namespace Day2.Server.Models;

public partial class Service
{
    public int ServiceId { get; set; }

    public string ServiceName { get; set; } = null!;

    public string? ServiceDescription { get; set; }

    public string? ServiceImage { get; set; }

    public virtual ICollection<SubService> SubServices { get; set; } = new List<SubService>();
}
