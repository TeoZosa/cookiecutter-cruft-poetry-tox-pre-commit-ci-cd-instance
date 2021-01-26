"""Command-line interface."""
from typing import Optional

import importlib_metadata
import structlog_sentry_logger
import typeguard
import typer
from dotenv import find_dotenv, load_dotenv

__version__ = importlib_metadata.metadata("cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance")["Version"]
app = typer.Typer()

# see `.env` for requisite environment variables
load_dotenv(find_dotenv())
LOGGER = structlog_sentry_logger.get_logger()


@typeguard.typechecked()
def version_callback(value: Optional[bool]):  # pylint: disable=unsubscriptable-object
    """Provides a version option for the CLI"""
    if value:
        typer.echo(f"cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance Version: {__version__}")
        raise typer.Exit()


@typeguard.typechecked()
@app.command()
def main(
    version: Optional[  # pylint: disable=unsubscriptable-object,unused-argument
        bool
    ] = typer.Option(
        None,
        "--version",
        callback=version_callback,
        is_eager=True,
        help="Show the version and exit.",
    ),
) -> None:
    """Cookiecutter Cruft Poetry Tox Pre Commit Ci Cd Instance."""
    LOGGER.info(
        "For `structlog_sentry_logger` usage documentation, see: "
        "`Structlog-Sentry-Logger`_"
        "_`Structlog-Sentry-Logger`: https://github.com/TeoZosa/structlog-sentry-logger"
    )


if __name__ == "__main__":
    app(prog_name="cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance")  # pragma: no cover
