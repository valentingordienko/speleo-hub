import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CongoDemocraticRepublic.svg';

export function CongoDemocraticRepublic(props: TBaseProps) {
  return (
    <Icon {...props} name="CongoDemocraticRepublic">
      <SVG />
    </Icon>
  );
}
