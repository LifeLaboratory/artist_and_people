from route.RouteService import Auth
from route.RouteRegistration import Reg
from route.RouteConcert import Concert
from route.RouteFire import Fire
from route.RouteQuestions import Quest
from route.RouteEvents import Event

ROUTES = {
    Auth: '/api/v1/auth',
    Reg: '/api/v1/reg',
    Concert: '/api/v1/concert',
    Fire: '/api/v1/fire',
    Quest: '/api/v1/questions',
    Event: '/api/v1/event',
}
