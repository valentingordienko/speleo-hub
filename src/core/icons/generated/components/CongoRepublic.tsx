import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CongoRepublic.svg';

export function CongoRepublic(props: TBaseProps) {
  return (
    <Icon {...props} name="CongoRepublic">
      <SVG />
    </Icon>
  );
}
