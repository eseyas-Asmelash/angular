using WebApi.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]  
    public class PersonalnfoController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ILogger<PersonalnfoController> _logger;

        public PersonalnfoController(DataContext context, ILogger<PersonalnfoController> logger)
            {
                _context = context;
                _logger = logger;
            }

        // GET: api/Customers
        [HttpGet(Name = "GetPersonalInfo")]
        public async Task<ActionResult<IEnumerable<PersonalInfo>>> Get()
        {
            return await _context.PersonalInfo.ToListAsync();
        }

        // GET: api/Customers/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<PersonalInfo>> GetByID(int id)
        //{
        //    var user = await _context.PersonalInfo.FindAsync(id);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return user;
        //}
    }
}
