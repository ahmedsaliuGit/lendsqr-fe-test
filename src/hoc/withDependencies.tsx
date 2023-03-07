import { ComponentProps, ElementType } from "react";
import { container } from "../dependencies";

export const withDependency = (
  Component: ElementType,
  dependencies: { [key: string]: symbol }
) => {
  const resolvedDependencies = {};

  Object.keys(dependencies).forEach((propName) => {
    const dependencyKey = Object.getOwnPropertyDescriptor(
      dependencies,
      propName
    )?.value;
    const dependency = container.get(dependencyKey);

    Object.defineProperty(resolvedDependencies, propName, {
      value: dependency,
      enumerable: true,
    });
  });

  return (props: ComponentProps<typeof Component>) => (
    <Component {...props} {...resolvedDependencies} />
  );
};
