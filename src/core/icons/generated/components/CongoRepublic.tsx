import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CongoRepublic.svg';

export function CongoRepublic(props: TProps) {
  return (
    <Icon {...props} name="CongoRepublic">
      <SVG />
    </Icon>
  );
}
