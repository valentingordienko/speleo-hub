import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ImportSolid.svg';

export function ImportSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ImportSolid">
      <SVG />
    </Icon>
  );
}
